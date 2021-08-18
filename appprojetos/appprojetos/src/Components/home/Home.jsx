export default function Home() {
  return (
    <div>
      <header>
        <a href="/">Home</a>
        <a href='/login'>Login</a>
        <a href="/client">Cadastrado</a>
        <a href="/new-client">Novo</a>
        <a href="/project-list">Lista de Projetos</a>
        <a href="/project-gallery">Consulta de Projetos</a>
      </header>
      <main>
        <h1 className='appprojetosHome'>
          APPProjetos
        </h1>
      </main>
    </div>
  )
}
