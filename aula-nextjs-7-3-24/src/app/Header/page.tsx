import Link from "next/link"

const Header = () =>{
    return(
        <>
            <header>
                <h1>Cabeçalho</h1> 
                <nav>
                    <ul className="">
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <Link href="/Produtos">Produtos</Link>
                        </li>

                        <li>
                            <Link href="/Contato">Contato</Link>
                        </li>

                        <li>
                            <Link href="/Footer">Footer</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;