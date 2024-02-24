import { config } from "dotenv";
config();  
import OpenAI from "openai";  


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

 
async function sendMessage(userMessage) {
    try {
      
        const res = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", 
            messages: [{ role: "user", content: userMessage }] 
        });

        // unknow bug: have to strinify before applying .choice
        let parsedResponse = JSON.parse(JSON.stringify(res, null, 2));
        let messageContent = parsedResponse.choices[0].message.content;

  
        console.log(messageContent);
       
    } catch (error) {
        
        console.error("Error:", error);
    }
}


sendMessage("enter message");
