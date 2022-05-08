import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css";

const Banner = () => {
    return (
        <section className="mx-auto w-full">
            <div className="banner-container flex items-center justify-center">
                <div className="header-title">
                    <h3 className="md:text-6xl text-3xl">Nis Books Warehouse</h3>
                    <p className="md:text-4xl text-xl">"A Room without Books 
                    is like a boady without asoul"</p>
                    <Link to="/about">
                        <button>Start Here</button>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default Banner;