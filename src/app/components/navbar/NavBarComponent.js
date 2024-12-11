"use client"
import Link from 'next/link';
import LogoComponent from '../logo/LogoComponent';
import { useRouter } from 'next/navigation';

const NavBarComponent = () => {

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        const query = new URLSearchParams({
            query: e.target.elements.navbarSearchBox.value,
        }).toString();

        router.push(`/search?${query}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#213A57", position: 'fixed', top: 0, left: 0, width: "100vw", zIndex: 1000 }}>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: 70 }}>
                <Link legacyBehavior href="/" passHref><a className="navbar-brand d-flex justify-content-center align-items-center" style={{ fontWeight: 700, fontSize: 36, paddingLeft: 10, gap: 20 }}>
                    <LogoComponent style={{ fill: '#f2f2f2', width: 55, height: 55 }} />RecRadar
                </a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item px-2 d-flex align-items-center">
                            <Link legacyBehavior href="/films" passHref><a className="nav-link" style={{ fontWeight: 400, fontSize: 24, color: "#f2f2f2" }}>Films</a></Link>
                        </li>
                        <li className="nav-item px-2 d-flex align-items-center">
                            <Link legacyBehavior href="/tv" passHref><a className="nav-link" style={{ fontWeight: 400, fontSize: 24, color: "#f2f2f2" }}>TV</a></Link>
                        </li>
                        <li className="nav-item px-2 d-flex align-items-center">
                            <Link legacyBehavior href="/books" passHref><a className="nav-link" style={{ fontWeight: 400, fontSize: 24, color: "#f2f2f2" }}>Books</a></Link>
                        </li>
                        <li className="nav-item px-2 d-flex align-items-center">
                            <Link legacyBehavior href="/mylist" passHref><a className="nav-link" style={{ fontWeight: 400, fontSize: 24, color: "#f2f2f2" }}>My List</a></Link>
                        </li>
                        <li className="nav-item px-2 d-flex align-items-center">
                            <Link legacyBehavior href="/account" passHref><a className="nav-link" style={{ fontWeight: 400, fontSize: 24, color: "#f2f2f2" }}>Account</a></Link>
                        </li>
                        <li className="nav-item px-2 d-flex align-items-center justify-content-center" style={{ height: "70px", width: 350 }}>
                            <form className="d-flex align-items-center justify-content-end" style={{ width: "90%" }} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="navbarSearchBox"
                                    placeholder="Search..."
                                    className="form-control searchbox"
                                    style={{
                                        fontWeight: 400,
                                        fontSize: 16,
                                        borderRadius: 10,
                                    }}
                                />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBarComponent;