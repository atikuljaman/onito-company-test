import React from 'react'
import { gql, useQuery } from '@apollo/client';
import './Countries.css';

const COUNTRIES_QUERY = gql`
        query getCountries($code: ID!) {
            continent(code: $code){
                countries{
                    name
                }
            }
        }
    `

const Countries = ({ code }) => {
    const { loading, error, data } = useQuery(COUNTRIES_QUERY, { variables: { code: code } });

    console.log(data?.continent?.countries);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div id='container'>
            {data?.continent?.countries?.map(country => (
                <p id='country' key={country?.name}>
                    {country?.name}
                </p>

            ))}
        </div>
    );
}

export default Countries