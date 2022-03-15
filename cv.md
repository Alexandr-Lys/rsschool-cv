# Alexandr Lysenko
***
<img src="photo.png" alt="Photo" style="width:30%;height:30%;">

***
## Contacts

* **Location:** Krasnodar, Russia
* **Phone:** +7 (962) 878-67-05
* **Email:** a.lysenko00@gmail.com
* **GitHub:** alexandr-lys
* **Telegram** @alexLysRSS

***

## About Me

Programming attracted me back in my student years, when we studied the programming of microcontrollers. I liked web development for its boundlessness and the minimum of the necessary physical resources for the production of a product, in this area it is possible and necessary to constantly develop and there is no visible end. I like working in a team. My goal is to become a good front-end developer.

***

## Skills

* HTML5,CSS3
* JavaScript Basics
* React and Redux Basics
* Git and GitHub
* IntelliJ IDEA

***

## Code Example

A function that finds all anagrams of a word from a list. Input data format: word and array with words. The function returns an array of all anagrams, or an empty array if there are none.
For example:
```
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

```

Code:
```
function anagrams(word, words) { 
    let newWord = word.split("").sort().join("")
    let arrAn = []
    for (let i = 0; i < words.length; i++) { 
        let currentWord = words[i].split("").sort().join("")
        if (newWord == currentWord) { 
            arrAn.push(words[i]) 
        } 
    } 
    return arrAn
}
```

***

## Experience
github.com/Alexandr-Lys/rsschool-cv

***

## English
Pre-Intermediate

***
