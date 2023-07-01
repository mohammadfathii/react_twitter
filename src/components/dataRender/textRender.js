import React from 'react';

const TextRender = (text) => {
    // let words = text.split(" ")
    // let newWords = words.map((word) => {
    //     if(word.includes("#")){
    //         word = `<a href="/tag/${word.replace('#','')}">${word}</a>`;
    //         return word;
    //     }else{
    //         return word;
    //     }
    // })
    // console.log(newWords)
    // return newWords.join(" ");

    let newText = text.replace(/#\S+/g,"<a href='/tags/$&'>$&</a>")
    return newText;
};

export default TextRender;
