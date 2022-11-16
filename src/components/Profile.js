import { useState, useEffect } from "react";

function Profile({ username }) {
  const [loading, setLoading] = useState(false); // données vide => données charger
  const [profile, setProfile] = useState({}); // données vide => données charger

  useEffect(() => {
    async function fetchData() {
      // cherchons les données sur internet
      const profile = await fetch(`https://api.github.com/users/${username}`);
      const result = await profile.json(); // les données sont carger ici
      if (result) {
        setProfile(result); // donnée mise à jour
        setLoading(false);
      }
    }
    fetchData(); // appel de la méthode
  }, [username]); // au moins une donnée

  return (
    <>
      <h2>A propose de moi</h2>
      {loading ? (
        <span>Loading....</span>
      ) : (
        <>
        <div>
          <img src={profile.avatar_url} alt="" />
        </div>
        <ul>
          <li>
            <span>html_url:</span> {profile.html_url}
          </li>
          <li>
            <span>repos_url:</span> {profile.repos_url}
          </li>
          <li>
            <span>name:</span> {profile.name}
          </li>
          <li>
            <span>compagny:</span> {profile.compagny}
          </li>
          <li>
            <span>location:</span> {profile.location}
          </li>
          <li>
            <span>email:</span> {profile.email}
          </li>
          <li>
            <span>bio:</span> {profile.bio}
          </li>
        </ul>
        </>
      )}
    </>
  );
}

export default Profile;
