import Link from "next/link"

const NotFound = () => {
    return (
        <div> 
            <h2> Not Found </h2>
            <p> Sorry, the page you're looking for could not be found.</p>
            <Link href="/">Return to home</Link>
        </div>
    )
}

export default NotFound