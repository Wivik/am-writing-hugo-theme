# Am Writing - A Hugo Theme for a writer's website

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Wivik_am-writing-hugo-theme&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Wivik_am-writing-hugo-theme)

Am Writing is a theme made for [Hugo](https://gohugo.io) for writers who desire to create an easy website.

[![Screenshot](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/screenshot.png)

## Features

Am Writing supports :

- Several different color themes
- Multilingual (French and English by default)
- Mastodon Feed integration
- Link to your Patreon, Mastodon, Ko-fi profile
- Various book metadata for a standard display page
- Fully customizable
- Display by book genre

![Screenshot2](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/screenshot2.png)

## Installation

In your hugo website root folder, add the theme :

```
git clone https://github.com/Wivik/am-writing-hugo-theme themes/am-writing
```

Or as a sub-module :

```
git submodule add https://github.com/Wivik/am-writing-hugo-theme themes/am-writing
```

Then, proceed to configuration.

## Configuration

### Enable the theme

Change in `hugo.yaml` (or `toml`) the theme :

```yaml
theme: am-writing
```

Add the following taxonomies for the books list :

```yaml
taxonomies:
  genres: genres

```

Add the default content language and indicate it's in a subdir.

```yaml
defaultContentLanguage: fr
defaultContentLanguageInSubdir: true
```

Then, add the two langues settings :

Do not change `mainSections: ['books']`

```yaml
languages:
  fr:
    contentDir: content/fr
    disabled: false
    languageCode: fr-FR
    languageName: Français
    title: Demo Author
    params:
      subtitle: Auteur d'un Site Demo
      mainSections: ['books']
    weight: 1
    menu:
      main:
        - identifier: home
          name: 'Accueil'
          url: /fr/
          weight: 10
        - identifier: books
          name: 'Livres'
          url: /fr/books/
          weight: 20
        - identifier: tags
          name: 'Genres'
          url: /fr/genres/
          weight: 30
        - identifier: legal
          name: 'Mentions légales'
          url: /fr/legal/
          weight: 40
  en:
    contentDir: content/en
    languageCode: en-GB
    languageName: English
    title: Demo Author
    disabled: false
    params:
      subtitle: Writer of a Demo Website
      mainSections: ['books']
    weight: 2
    menu:
      main:
        - identifier: home
          name: 'Home'
          url: /en/
          weight: 10
        - identifier: books
          name: 'Books'
          url: /en/books/
          weight: 20
        - identifier: tags
          name: 'Genres'
          url: /en/genres/
          weight: 30
        - identifier: legal
          name: 'Legal Notice'
          url: /en/legal/
          weight: 40

```

Adapt it with you choices.

### Specific settings

The theme supports the following settings :

| Setting | Required | Default value | Description |
| ------- | -------- | ------------- | ----------- |
| `params.author` | No | `none` | Your author name, your should set it. |
| `params.avatar` | No | `none` | A picture expected to be in the `/static` folder. |
| `params.bookListType` | No | `grid` | Change the book list style, default is thumbnail `grid` with description. Other option is `list` for the previous display way.<br>Possible values :<br>- `grid` (default)<br>- `list` |
| `params.commission` | No | `false` | Display a button showing you're open for commissions. Possible values : `true` (commissions opened), `false` (commissions closed) |
| `params.commissionLink` | No | `none` | The link to your commission platform. |
| `params.contentLicense` | No | `none` | Display the license used for the website in the footer. Ex : CC BY-SA 4.0 |
| `params.goodreads` | No | `none` | Your GoodReads profile URL |
| `params.kofi` | No | `none` | Your Ko-fi profile URL |
| `params.mastodon` | No | `none` | The URL of your Mastodon profile. |
| `params.mastodonMaxItems` | No | `5` | How much posts you want to display in your feed. |
| `params.pageCountisEstimated` | No | `false` | If set to true, this will add a small pop-up on the number of Pages displayed on the book details indicating the page count is an estimation. This is recommended if you only publish epub files because unlike physical copies, they does not have actual defined pages layout. <br>The default estimation is said to be based on 280 words per pages (see my [epub metadata exporter tool](https://github.com/Wivik/epub-metadata-exporter) for more). You may adapt this message in the `i18n` translation. |
| `params.patreon` | No | `none` | Your Patreon profile URL |
| `params.theme` | No | `nord` | Use one of the built-in themes :<br>- `nord`<br>- `catpuccin-latte`<br>- `catpuccin-frappe` |
| `params.themeFont` | No | `serif` | Use the Serif or Sans Serif font. Available options :<br>- `serif`<br>- `sans-serif` |

### Themes showcase

Nord (defaut)

[![Nord](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/nord-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/nord.png)

Catpuccin Latte

[![Catpuccin Latte](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/catpuccin-latte-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/catpuccin-latte.png)

Catpuccin Frappe

[![Catpuccin Frappe](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/catpuccin-frappe-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/catpuccin-frappe.png)

Dark

[![Dark](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/dark-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/dark.png)

### Book list layout

The theme supports two layouts for the book list : grid (default) and list.

Grid layout :

[![Grid](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/grid-layout-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/grid-layout.png)

List layout (previous one) :

[![List](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/list-layout-tn.png)](https://raw.githubusercontent.com/Wivik/am-writing-hugo-theme/main/images/list-layout.png)

### Override default profile

The short bio available on the left is configured in the translation files. To override it, create a translation file `<hugo site root dir>/i18n` named according to the language (ex : English : `en.yaml`).

Inside, you can override the builtin translations :

```yaml
genres:
  short-story: "Short Story"
  science-fiction: "Science Fiction"

about:
  author: |
    Insert here your author's bio

  legal-notice: |
    The stories and characters in <YOUR NAME HERE>'s books are purely fictional. Any resemblance to existing or former persons is purely coincidental.

```

## Books management

### Books page content

All the books pages are managed by metadata, no actual content inside the markdown file.

Please refer to the [archetype/book.md](https://github.com/Wivik/am-writing-hugo-theme/blob/main/archetypes/book.md?plain=1) file for comprehensive reference.

Variables documentation :

| Name | Required | Default value | Description |
| ---- | -------- | ------------- | ----------- |
| `amazon` | No | `none` | The link to Amazon KDP entry. If you publish only on Amazon, ignore this field and put the link in `link`. |
| `author` | Yes | `{{ .Site.Params.author }}` | Author's name, in case it would be a different person. |
| `authorsnote` | No | `none` | If you want to add a personal comment about your book. |
| `book` | Yes | `true` | Do not remove or change, it's used by the template. |
| `cover` | No but recommended |  `{{ printf "%s.jpg" .File.ContentBaseName }}` | The name of the cover file. This file is expected to be in the `/static` folder. |
| `date`| Yes | `{{ .Date }}` | The book's publication date. This is defined by Hugo as page creation, so modify it to reflect the actual release date. |
| `description` | No but recommended | `none` | The book's description. Could be the synopsis or whatever else you want. Markdown is supported. |
| `draft` | No | `false` | Set true if you don't want to publish this entry yet. |
| `epub` | No | `false` | You can directly propose an epub file, put in this field the epub filename (ex : something.epub). It must be placed in the `/static/free-books` folder. |
| `free` | No | `false` | If you publish your book for free, will change the value of the main link button to "Free book". |
| `freepreview` | No | `false` | If you have a free preview for your book, put here the name of the `.epub` file. The file is expected to be in the `/static/books-preview/` folder. |
| `genres` | No | `none` | A list of your book's genres. Use the technical name available in the `i18n` files to have the labels translated. |
| `googlePlay` | No | `none` | The link to Google Play Books if you publish there. |
| `isbn` | No | `1234567891237` | Your book's ISBN |
| `language` | Yes | `EN` | The book's language. Required if multilingual and the book has a translation. |
| `link` | No | `none`  | The link of your main selling place. Book2Read for example.<br>If missing, the page will display "Unavailable". |
| `pages` | No | `70` | How much pages the book contains. You can use [a tool](https://github.com/Wivik/epub-metadata-exporter) I've made for this information. |
| `patreon` | No | `none`  | The link to Patreon if you publish there. |
| `publishedOn` | No | `{{ .Date }}` | The publication date of your book. Default to the page creation date if not provided. |
| `title` | Yes | `{{ replace .File.ContentBaseName "-" " " \| title }}` | The Book's title |
| `words` | No | `18k` | How much words the book contains. You can use [a tool](https://github.com/Wivik/epub-metadata-exporter) I've made for this information. |
| `xinxii` | No | `none` | The link to XinXii if you publish there. |


### Create a new book

Use hugo with the right kind.

```
hugo new content books/my-book.md --kind book
```

Then, edit the new file accordingly.

### Concerns about translated books

The book file (ex : `my-book.md`) *must* have the same name for eveyr languages. Change the title inside the file. So Hugo will be able to match the various languages for your content.

Ex :

- `en/books/my-book.md` => `title: My Book`
- `fr/books/my-book.md` => `title: Mon Livre`


## License

Am Writing is licensed under MIT. See [LICENSE](https://github.com/Wivik/am-writing-hugo-theme/blob/main/LICENSE).

### Third party content license

- Droid Serif is licensed under Apache 2.0
- Droid Sans is licensed under Apache 2.0
- Using Remix Icons licensed under Apache 2.0
- Uses Catpuccin color scheme licensed under MIT license
- Uses Nord Theme color scheme licensed under MIT license

