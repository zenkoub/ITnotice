"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function signin() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      // Make an Axios request to the GitHub API on the client side
      axios.get('https://api.github.com/users/Zensos/repos')
        .then((response) => {
          setRepos(response.data);
        })
        .catch((error) => {
          console.error('Error fetching GitHub repositories:', error);
        });
    }, []);
    console.log(repos)
    return (
        <>
            <div className="text-white">
                
            </div>
        </>
    )
}
