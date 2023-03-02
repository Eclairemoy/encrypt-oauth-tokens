const axios = require('axios');
const Evervault = require('@evervault/sdk');

export default async function handler(req, res) {

    const evervault = new Evervault(process.env.EVERVAULT_API_KEY);
    await evervault.enableOutboundRelay()
    
    const data  = {'client_id': process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID, 'client_secret': process.env.GITHUB_CLIENT_SECRET, 'code': req.query.code};
    const headers = {'headers': {'accept': 'application/json'}} 

    let accessToken = await axios.post('https://github.com/login/oauth/access_token', data, headers).then(response => { return response.data.access_token })

    const emailHeaders = {'headers': {"Authorization": "Bearer " + accessToken, "accept": "application/vnd.github+json"}}
    const email = await axios.get('https://api.github.com/user', emailHeaders).then(response => { return response.data })

   const userData = {name: email.name, email: email.email, auth_token: accessToken}
 
   res.status(200).json({ data: userData })
}