import React from 'react'
import './style.css'
const HelpMain = () => {
    const cards =[
        { img: "😀", tittle:"Proactive Campaigns", info:"Useful guidelines for using Proactive Campaigns features. Practical recommendations to the most common issues."},
        { img: "📧", tittle:"Email Tracking", info:"Read this section for the peculiarities of tracking email opens in Zendesk (and more)."},
        { img: "🚌", tittle:"GDPR Compliance", info:"Find out how to be GDPR & CCPA Compliant and solve customer requests faster using the app."},
        { img: "🌏", tittle:"Video Reply", info:"Visit this category if you have any questions about Video Reply functions, or have an issue to resolve."},
        { img: "🏰", tittle:"CRM and Deals for Zendesk", info:"Resolutions to any issues concerning CRM and Deals app, and answers to frequently asked questions."},
        { img: "🌈", tittle:"NPS and Survey", info:"Articles that will help you to manage your satisfaction surveys created in NPS and Survey app."},
        { img: "🍵", tittle:"Purge My Zendesk", info:"Explore the details of complete data cleanup with the Purge My Zendesk app."},
        { img: "🍙", tittle:"GrowthDot Themes", info:"Everything you need to know about installing and configuring GrowthDot’s themes for Zendesk."},
        { img: "🎮", tittle:"Email Tracking for Freshdesk", info:"Get the answer to all questions regarding the functionality of Email Tracking for Freshdesk."},
        { img: "🎃", tittle:"General", info:"Some general guides on configuring or integrating Zendesk with any of the GrowthDot apps in the right way."},
    ];
  return (
    <div className='helpmain'>
        {
            cards.map( (card) =>{
                return (
                    <div className='helpcard'>
                        <div className="helpcardimg">{card.img}</div>
                        <div className="helpcardcontent">
                        <div className="helpcardtittle">{card.tittle}</div>
                        <div className="heplcardinfo">{card.info}</div>
                        </div>
                    </div>
                )
            }
            )        }

    </div>
  )
}

export default HelpMain