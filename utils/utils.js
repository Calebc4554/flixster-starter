const apiKey = import.meta.env.VITE_APP_API_KEY;
import React, { useEffect, useState } from 'react';
import MovieCard from '../src/components/MovieCard'; 

function loadDataFromJson() {
        fetch('../data/data.js')
        .then(res => res.json())
        .then(data => {


        })
    }