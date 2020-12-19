import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
    return <Layout>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>First Post</title>

        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />

        </h2>
        </Layout>
}


<style jsx>{`
 
`}</style>
