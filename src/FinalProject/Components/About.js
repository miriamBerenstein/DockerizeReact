import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate()

    return (
        <>
            <div id="navigate" class="btn-group btn-group-lg" role="group" aria-label="...">
                <button type="button" class="btn btn-dark" onClick={() => navigate("/")}>About</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Shop")}>Shop</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Cart")}>Cart</button>
                <button type="button" class="btn btn-dark" onClick={() => navigate("/Payment")}>Payment</button>
            </div>
            

            <h1 style={{"color":"red"}}>OUR MISSION</h1>
            <h4 class = "mytxt">"Shaming Shames Me" is an association that works to strengthen a positive discourse culture in Israel and promote values of tolerance and mutual respect by raising awareness of the harms of defamation and shaming.</h4>
            <h4 class = "mytxt">The project was established in 2007 by businessman David Halperin, and as part of it, the message was spread through huge billboards throughout the country, distribution of millions of stickers and bracelets, visits and distribution of products in hospitals and military bases, and the production of art exhibitions. In a short time, the message became a currency that lives in many mouths, crossing sectors and cultures. The purpose of the publication is a daily reminder of the damage caused by slander, raising awareness of the power of words and a value statement for those who wear the message regarding their commitment to eradicating the phenomenon, since cultural change begins with each of us. The activity was self-financed, while harnessing many partners and volunteers in order to create an activist movement. The project was a great success and received wide public support throughout the country and among people of all ages and the bracelets became a desirable fashion item.</h4>
           
            <h4 class = "mytxt">In recent years we have witnessed an escalation in the conventional discourse. The concept of "word of mouth" takes on a new meaning in light of the expanded exposure afforded by digital networks, and the discourse becomes quite easily offensive and may lead to devastating results when children who undergo shaming harm themselves, discussions about politics take on a dimension of violence and a general decrease in the inclusion of others and different opinions is felt.</h4>
            <h4 class = "mytxt">Therefore, after 14 years of "guerrilla" activity that was created out of action and without planning, it was decided to formalize the activity within an association for the purpose of expanding the activity in a systematic way and increasing the impact on the education of the future generation.
The activity of the association is done with the belief that a real cultural change will be made by education and personal example. The association focuses on the field of education and operates professional programs that are coordinated for children and teenagers within kindergartens, schools, high schools and youth movements all over the country. The graduates of our programs, along with many other volunteers, become part of a community of "ambassadors" that is committed to preserving the language, tolerance and respect for others and works in the field and on social networks to improve the discourse. Alongside this activity, the association operates, among other things, in the online space, social networks and public media with the aim of reaching as wide an audience as possible. The association has a partnership with first-rate public opinion leaders who have become ambassadors of the association who are also committed to the goal and want to set a personal example.
The association's activity spans the world, and as of today, the slogan has been translated into 15 languages and the hand is still tilted. The association has extensive activity in English, on the Instagram profile and in front of ambassadors in the USA.
In 2020, the defamation project won the prestigious Jerusalem award and this is just the beginning.
Join us too, together we can make an impact.</h4>
            <h4 class = "mytxt"></h4>
            <h4 class = "mytxt"></h4>
            <button type="button" class="btn btn-outline-dark" onClick={() => navigate("/Shop")}>Shop</button>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}