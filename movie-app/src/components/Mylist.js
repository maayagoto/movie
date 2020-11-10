import React from 'react';
import  MovieLists  from '../components/Movielists';
import { getStorage} from '../utilities/storageMaker';
import { NavLink } from 'react-router-dom';


const Mylist = (props) => {

    const myMovies = getStorage();
    console.log(myMovies)

    return (
        <main>
            {(myMovies.length !== 0) ? <MovieLists movies={myMovies}/> : <p>You have not selected any favorited movies.<br/> Return to the <NavLink to={'/'} exact>Home</NavLink> to add a favourite movie </p> }
        </main>
    )

}

export default Mylist;