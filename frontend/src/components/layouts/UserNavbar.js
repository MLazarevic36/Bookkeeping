import React from "react"
import { Link } from "react-router-dom"
import useUser from "../../redux/hooks/useUser"
import styled from "styled-components"
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu"
const UserNavbar = ({ children }) => {
 
    return (
        <Container>
            <nav>
                <div className="nav-left">
					<Link
                        to="/conto-plan"
                        className="nav-buttons"
                        title="Kontni plan"
                        >
						<p className="nav-title">Kontni plan</p>
					</Link>
					<Link
                        to="/config/bsa-weight"
                        className="nav-buttons"
                        title="Nalog"
                        >
						<p className="nav-title">Nalog</p>
					</Link>
					<Link
                        to="/config/bsa-weight"
                        className="nav-buttons"
                        title="Glavna knjiga"
                        >
						<p className="nav-title">Glavna knjiga</p>
					</Link>
					<Link
                        to="/config/bsa-weight"
                        className="nav-buttons"
                        title="Izvestaji"
                        >
						<p className="nav-title">Izvestaji</p>
					</Link>
                </div>
                <div className="nav-center">
                    {/* <Link to="/calculator" className="nav-buttons" title="Calculator">
                        <CalculateIcon />
                        <p className="nav-title">Calculator</p>
                    </Link>

                    {hook.showBsaWeight && (
                        
                    )}
                    {hook.showCurrencyRate && (
                        <Link
                            to="/config/currency-rates"
                            className="nav-buttons"
                            title="Currency rates"
                        >
                            <CurrencyIcon />
                            <p className="nav-title">Currency rates</p>
                        </Link>
                    )}
                    {hook.showDosagePattern && (
                        <Link to="/dosage-pattern" className="nav-buttons" title="Dosage pattern">
                            <DosagePattern />
                            <p className="nav-title">Dosage pattern</p>
                        </Link>
                    )} */}
                </div>
                <div className="nav-right">
                    {/* <Link to="/profile" className="nav-buttons" title="Profile">
                        <ProfileIcon />
                        <p className="nav-title">Profile</p>
                    </Link>*/}
					<div className="nav-buttons" title="Logout">
                        <p className="nav-title">Logout</p>
                    </div>
                </div>
            </nav>
            {children}
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: var(--white);
    position: relative;

    nav {
        display: flex;
        height: 54px;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        background: #24B4BC;
        color: var(--black);
        padding: 0 20px 0 20px;
        font-size: 15px;
        a,
        a:hover,
        a:visited,
        a:active {
            color: inherit;
            text-decoration: none;
        }
    }

    .nav-center,
    .nav-right {
        display: flex;
        column-gap: 30px;
    }

    .nav-left {
        column-gap: 20px;
    }
    .nav-left {
        display: flex;
        align-items: center;
        select {
            width: 190px;
            padding-right: 20px;
            margin-bottom: 0;
            background: var(--blue);
            color: var(--white);
            font-weight: 500;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg width='15' height='10' viewBox='0 0 21 13' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L10.5 11L20 1.5' stroke='%23E8E9EB' stroke-width='2.5'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 96%;
        }
    }
    .nav-buttons {
        display: flex;
        align-items: center;
        background: #00707C;
        padding: 1px 4px;
        border-radius: 4px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: var(--black);
        cursor: pointer;
        :visited {
            color: var(--black);
        }
        :active {
            box-shadow: none;
            transform: translateY(1px);
            color: inherit;
        }
    }
    .resetBtn {
        position: absolute;
        width: 130px;
        height: 30px;
        top: 60px;
        right: 2.5%;
        color: var(--white);
        background: var(--green);
    }
    .nav-title {
        color: #ffffff;
        :active {
            color: inherit;
        }
    }
`
export default UserNavbar
