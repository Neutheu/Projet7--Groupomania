import FooterButtons from "./FooterButtons";
import LikeButton from "../buttons/LikeButton";
import '../../style/homePost/HomePostFooter.css'

function HomePostFooter () {
    return <div className="homePostFooter">
        <FooterButtons />
        <LikeButton />
    </div>
}

export default HomePostFooter
