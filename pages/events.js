import { Button, Container } from '@mui/material';
import Head from 'next/head'
import * as React from 'react';
import {NavBarComponent} from '../components'


export default function Events() {
    return (
        <div>
            <NavBarComponent/>
        <div className="container">

            <Container>
                <h1>
                    OUR PREVIOUS EVENTS
                </h1>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/dct4FUadGm4?start=503" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


                
            </Container>
            

            <style jsx>{`
                .container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }

                * {
                box-sizing: border-box;
                }
            `}</style>

        </div>
        </div>
    )
}