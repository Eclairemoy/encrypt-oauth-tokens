import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import GithubComponent from './GithubComponent';

const inter = Inter({ subsets: ['latin'] })

export default function App() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}} className={inter.className}>
      < GithubComponent / >
    </div>
  );
}