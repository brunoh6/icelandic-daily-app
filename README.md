# Icelandic Daily

A small offline-friendly Icelandic study app for 15-20 minute daily classes. It is built as a plain Progressive Web App, so it runs on a MacBook in a browser and can be opened or installed on an iPhone from Safari.

## Run on MacBook

```bash
cd "/Users/brunopaolohuamanvela/Documents/Icelandic App"
python3 -m http.server 5173 --bind 0.0.0.0
```

Then open:

```text
http://localhost:5173
```

## Open on iPhone

Keep the MacBook server running and connect the iPhone to the same Wi-Fi network. On the MacBook, find the local IP address:

```bash
ipconfig getifaddr en0
```

On the iPhone, open Safari and visit:

```text
http://YOUR_MAC_IP:5173
```

For example:

```text
http://192.168.1.25:5173
```

To install it like an app, tap Share, then Add to Home Screen.

## Deploy To GitHub Pages

After creating an empty GitHub repository, connect it and push:

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

In GitHub, open Settings, then Pages. Choose Deploy from a branch, select `main`, and use `/ (root)`.

## What Is Included

- 16 guided lesson stages based on the book's progression.
- Daily theory, phonetic practice notes, and exercises.
- Gradually harder grammar topics, from sounds and greetings to subjunctive review.
- Progress tracking, streak count, mastery percentage, and class completion.
- Review queue for older classes.
- Reading section with original A0, A1, A2, and A2-B1 level texts.
- Reading filters by level/topic, vocabulary hints, English sense checks, and comprehension questions.
- Icelandic-English vocabulary search by word, translation, or topic.
- Dark responsive interface with an Iceland-inspired nightscape.

The lesson text and exercises are original study material derived from the course structure and topics, not a reproduction of the book.
