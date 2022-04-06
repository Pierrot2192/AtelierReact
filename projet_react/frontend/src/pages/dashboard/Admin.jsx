//Effectué des requete qd arrive sur une page

import AllowAccess from "../../components/AllowAccess";
import ForbiddenAccess from "../../components/ForbiddenAccess";

const Admin = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const checkAdmin = async() => {
            const result = await fetch ('http://localhost:8443/api/test/admin',{
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.status === 200){
                setIsAdmin(true);
            }else{
                setIsAdmin(false);
            }
        };
        checkAdmin();
    }, []);//crochet vide car pas bsn de suivre les autres etats
    return(
        <div>{isAdmin 
            ? <AllowAccess type="admin"/> 
            : <ForbiddenAccess type="admin"/>}
        </div>
    );
};

export default Admin;
