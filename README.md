# Language manager

This project has been bodged together in a couple of hours. It provides an easy to use platform to update language files. Note that this is very specific to the [TapAndFish](https://tapandfish.com) platform (and in fact contains its language files), but if you want to clone and use this for your project there shouldn't be any big problem.

## How this works

Run with:
```bash
npm run dev
```

English is considered the primary language. First, you generate the English file, then you use the English content to translate to the other languages.

In the home page you can access the different languages and create a new one. Flag code is different because some languages might have different flags (i.e. language `en` has both `gb` and `us`).

When you open the English page you are able to add new fields and change old values.

When you open some other language page you are able to see the English text and add the translation.

Saved language files are in the `/static/languages/` folder.

Saved language db (the list of all languages and properties) is saved as `/src/_languages.js`

## This is meh

I know this isn't great, it's just a fast way to do the job and be more organized. The CI/CD process for the website extracts the files from this repo.


![meme](https://i.imgur.com/mpUMTxF.jpeg)
