import ClientDataPage from "./compoents/testecomp";

async function getDados() {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    return data
}

export default async function TestSSR({ joke }) {
    const dados = await getDados()
    console.log(dados);
    
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Joke from API (SSR)</h1>
            <p>{joke}</p>
            <ClientDataPage />
        </div>
    );
}