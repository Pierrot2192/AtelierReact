
const Moderator = () => {
    const [isModerator, setIsModerator] = useState(false);
    useEffect(() => {
        const checkModerator = async() => {
            const result = await fetch ('http://localhost:8443/api/test/mod',{
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (result.status === 200){
                setIsModerator(true);
            }else{
                setIsModerator(false);
            }
        };
        checkModerator();
    }, []);//crochet vide car pas bsn de suivre les autres etats
    return(
        <div>{isModerator 
            ? <AllowAccess type="moderator"/> 
            : <ForbiddenAccess type="moderator"/>}
        </div>
    );
};

export default Moderator;
