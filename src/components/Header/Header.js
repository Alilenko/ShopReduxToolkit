import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {changeSearch} from '../productItem/ProductItemSlice'
import './header.css'

const Header = () => {
	const {qtty, search} = useSelector(state => state.goods);
	const dispatch = useDispatch();

    return (
        <header className="header shop">
            <div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12">
						<div className="logo">
							<Link to='/'><img src="images/logo.png" alt="logo"/></Link>
						</div>
						<div className="search-top">
							<div className="top-search"><a href="#0"><i className="ti-search"></i></a></div>
							<div className="search-top">
								<form className="search-form">
									<input type="text" placeholder="Search here..." name="search"/>
									<button value="search" type="submit"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
						<div className="mobile-nav"></div>
					</div>
					<div className="col-lg-8 col-md-7 col-12">
						<div className="search-bar-top">
							<div className="search-bar">
								<form>
									<input value={search} onChange={(e) => dispatch(changeSearch(e.target.value))} name="search" placeholder="Search Products Here....." type="search"/>
									<button className="btnn"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-3 col-12">
						<div className="right-bar">

							<div className="sinlge-bar shopping">
								<Link to='/card' className="single-icon"><i className="ti-bag"></i> <span className="total-count">{qtty}</span></Link>

						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
        </header>
    )
}

export default Header;
