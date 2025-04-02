# بەرهەمهێنەری تێکستی کوردی - Kurdish Text Generator

## سەبارەت بە پڕۆژەکە

بەرهەمهێنەری تێکستی کوردی ئاپلیکەیشنێکی وێب‌ە کە بەکاردێت بۆ بەرهەمهێنانی تێکستی کوردی بە ئاسانی. ئاپلیکەیشنەکە لە ڕێگەی Mistral AI API دەتوانێت تێکستی جۆراوجۆر بە زمانی کوردی دروست بکات.

## تایبەتمەندییەکان

- ڕووکارێکی سادە و ڕێکوپێک بە دیزاینی تاریک (شێوازی Claude)
- بەرهەمهێنانی تێکستی کوردی بەپێی داواکاری بەکارهێنەر
- کۆپی کردنی ئاسانی تێکستی بەرهەمهێنراو
- ڕووکاری بەکارهێنەر کە لەگەڵ مۆبایل و کۆمپیوتەر گونجاوە
- خێرایی لە بەکارهێنان و وەڵامدانەوە

## پێکهاتە

ئەم پڕۆژەیە بەم شێوەیە ڕێکخراوە:

```
kurdish-text-generator/
├── index.html               # فایلی سەرەکی HTML
├── css/
│   └── styles.css           # ستایلەکان
├── js/
│   ├── app.js               # فایلی سەرەکی جاڤاسکریپت
│   ├── UIManager.js         # کلاسی بەڕێوەبردنی ڕووکار
│   ├── ApiService.js        # کلاسی خزمەتگوزاری API
│   ├── TextGenerator.js     # کلاسی بەرهەمهێنانی تێکست
│   └── ClipboardManager.js  # کلاسی بەڕێوەبردنی کۆپی
└── README.md                # دۆکیومێنتی پڕۆژە
```

## بەکارهێنانی پڕۆژە

1. داواکارییەکەت لە بۆکسی نووسین بنووسە
2. دوگمەی ناردن (ئایکۆنی ئەرۆ) یان دوگمەی Enter لە کیبۆردەکەت دابگرە
3. چاوەڕێ بکە تاکو تێکستەکە بەرهەم دەهێنرێت
4. دەتوانیت تێکستی بەرهەمهێنراو کۆپی بکەیت بە هێنانی ماوس بۆ سەر تێکستەکە و کرتەکردن لە دوگمەی کۆپی

## پێویستییەکانی API

ئەم پڕۆژەیە لە خزمەتگوزاری Mistral AI API بۆ بەرهەمهێنانی تێکست بەکاردێنێت. بۆ بەکارهێنانی پڕۆژەکە، پێویستت بە API key هەیە. API key ی پێشوەخت لە فایلی `ApiService.js` دانراوە، بەڵام دەتوانیت لەوێ بیگۆڕیت بە API key ـی تایبەت بە خۆت.

## پێکهاتەی کۆد و کلاسەکان

### App.js
فایلی سەرەکی کە پڕۆژەکە دەست پێدەکات و کلاسەکانی تر ڕێکدەخات.

### UIManager.js
کلاسی بەڕێوەبردنی ڕووکار کە کاری:
- بەڕێوەبردنی ڕووداوەکانی ڕووکار (event handling)
- نیشاندانی حاڵەتی چاوەڕوانی (loading)
- نیشاندانی دەرەنجامەکان لە شاشە
- بەڕێوەبردنی نیشاندانی هەڵەکان

### ApiService.js
کلاسی خزمەتگوزاری API کە کاری:
- پەیوەندی کردن بە Mistral AI API
- ناردنی داواکارییەکان و وەرگرتنی وەڵام
- چارەسەرکردنی هەڵەکانی پەیوەندی

### TextGenerator.js
کلاسی بەرهەمهێنانی تێکست کە کاری:
- ئامادەکردنی داواکارییەکان بۆ بەرهەمهێنانی تێکست
- بەکارهێنانی ApiService بۆ وەرگرتنی تێکست
- بەڕێوەبردنی پرۆمپتی سیستەم

### ClipboardManager.js
کلاسی بەڕێوەبردنی کۆپی کردن کە کاری:
- کۆپی کردنی تێکست بۆ کلیپبۆرد
- پشتگیری لە شێوازی نوێ و کۆنی کۆپی کردن
- دڵنیابوون لە کارکردنی کۆپی لە هەموو وێبگەڕەکان

## دروستکەر

ئەم پڕۆژەیە بە هاوکاری Claude 3.7 Sonnet دروستکراوە.

## مافەکان

ئەم پڕۆژەیە بە ئازادی بەردەستە بۆ بەکارهێنان و گۆڕانکاری تێدا کردن.