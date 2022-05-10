function Home ({currentUser}) {
    return (
        <h1>Welcome {currentUser?.name}!</h1>
    )
}

export default Home;