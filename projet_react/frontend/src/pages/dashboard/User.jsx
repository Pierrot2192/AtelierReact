const User = () => {
    const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        const checkUser = async() => {
            const result = await fetch ('http://localhost:3000/api/test/user',{
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.status === 200){
                setIsUser(true);
            }else{
                setIsUser(false);
            }
        };
        checkUser();
    }, []);//crochet vide car pas bsn de suivre les autres etats
    return(
        <div>{isUser 
            ? <AllowAccess type="User"/> 
            : <ForbiddenAccess type="User"/>}
        </div>
    );
};
export default User;
