function SayHello() {
    let firstName = 'Fahad';
    let FullName = ()=>{
        return 'Fahad Shahid';
    }
    return <h1>
        Hello everyone! I am {FullName()}
    </h1>
}

export default SayHello;