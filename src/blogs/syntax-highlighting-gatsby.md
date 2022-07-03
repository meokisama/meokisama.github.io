---
title: "Syntax highlighting trong GatsbyJS"
category: "code"
date: "2020-08-10 12:00:00 +09:00"
desc: "Trang điểm cho những dòng code khi xử lý Markdown trong Gatsby theo tiêu chuẩn của tớ."
thumbnail: "./images/syntax-highlighting-gatsby/thumb.png"
alt: "syntax highlighting gatsbyJS"
---

## Tổng quan

Với một người yêu cái đẹp như tớ thì việc tô điểm cho code block của mình là thứ không thể thiếu, mà hầu hết ai cũng vậy thôi.

Thay vì như này :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/syntax-highlighting-gatsby/ugly.png)

Thì ai chả muốn một cái đẹp hơn, ví dụ như này :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/syntax-highlighting-gatsby/beautiful.png)

hoặc như **của tớ** hiện tại :

```java
System.out.println("Hê hê hê");
```

Nên bài post này tớ sẽ hướng dẫn để thực hiện **syntax highlighting** như vậy nhaa.

## Một số plugin nổi bật

**Syntax highlighting** thì có nhiều công cụ hỗ trợ, một số cái nổi bật nhất ta có thể kể đến ví dụ như :

### [Prism](https://github.com/PrismJS/prism)

Chắc đây là plugin nổi tiếng nhất rồi nên mình cũng không cần nói gì thêm. Ví dụ sau đây là một sản phẩm từ **Prism** :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/syntax-highlighting-gatsby/prism.png)

**Link hướng dẫn sử dụng** chi tiết mình để [ở đây](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/), các bạn nếu muốn thì đọc và làm theo hướng dẫn là được nha.
### [gatsby-remark-highlight-code](https://github.com/deckgo/gatsby-remark-highlight-code)

Cái này không quá nổi nhưng vẫn là một thứ **rất đẹp**, nó tạo ra các code block tương tự như [carbon.now.sh](https://carbon.now.sh/), kiểu như này :

![](https://raw.githubusercontent.com/meokisama/blog/develop/src/posts/images/syntax-highlighting-gatsby/screenshot-carbon.png)

### [gatsby-remark-vscode](https://github.com/andrewbranch/gatsby-remark-vscode)
 
 Là thứ tớ đang sử dụng, nó hỗ trợ các theme từ **VS Code**, tức là *bất kỳ* ngôn ngữ hay theme nào mà **VS Code** hỗ trợ, dù được tích hợp sẵn hoặc thông qua tiện ích mở rộng của bên thứ ba, đều có thể được plugin này hỗ trợ.

**Tại sao tớ lại chọn** `gatsby-remark-vscode`?

Vì bị nhóm tác giả thuyết phục, họ có nói như này :

>JavaScript syntax highlighting libraries that were designed to run in the browser, like [Prism](https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/), have to make compromises given the constraints of their intended environment. Since they get downloaded and executed whenever a user visits a page, they have to be ultra-fast and ultra-lightweight. Your Gatsby app, on the other hand, renders to HTML at build-time in Node, so these constraints don’t apply. So why make tradeoffs that don’t buy you anything? There’s no reason why the syntax highlighting on your blog should be any less sophisticated than the syntax highlighting in your code editor. And since VS Code is built with JavaScript and CSS, is open source, and has a rich extension ecosystem, it turns out that it’s pretty easy to use its highlighting engine and extensions and get great results.

Thôi tóm lại thì sau khi khi config thì code block **theo tiêu chuẩn của tớ** thì trông nó sẽ như này hê hê :

```jsx {numberLines}
var ProfileLink = React.createClass({
  render: function() {
    return (
      <a href={'https://www.facebook.com/' + this.props.username}>
        Hơi bị đẹp!!!
      </a>
    );
  }
});
```
Còn đây là với code HTML :

```html {numberLines}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Hello world</title>
  <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <div id="app"></div>
  <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.1/less.min.js"></script>
  <script src="vendor/prism.js"></script>
  <script src="examples.bundle.js"></script>
</body>
</html>
```
## Hướng dẫn sử dụng

Đầu tiên đương nhiên là **cài đặt package** rồi, tiến hành cài đặt `gatsby-remark-vscode` như sau :

```bash
npm install --save gatsby-remark-vscode
```

Rồi để sử dụng thì ta phải khai báo nó cái đã, mở file `gatsby-config.js` rồi thêm đoạn code sau dưới phần `gatsby-transformer-remark` nha :

```js
{
  // ...
  plugins: [{
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        options: {
          theme: 'Abyss' // Or install your favorite theme from GitHub
        }
      }]
    }
  }]
}
```
Các theme khác hay một vài chức năng nữa các bạn đọc kĩ hơn [ở đây](https://www.gatsbyjs.com/plugins/gatsby-remark-vscode/) nha. 

À tớ quên nói, ai chưa cài `gatsby-transformer-reamark` thì cũng phải cài luôn nha.

Đơn giản vậy thôi, giờ **có thể sử dụng luôn** rồi đó.

## Lưu ý

### Trong đường link tớ để ở trên đã hướng dẫn vô vô cùng chi tiết và cụ thể cách sử dụng `gatsby-remark-vscode` và config rồi.

Tớ cũng không nhắc lại làm gì cho mất công. Cái tớ muốn chia sẻ tiếp theo là những thứ **chưa bao giờ được nhắc đến**.

Các bạn nãy giờ có để ý **cái tai thỏ màu đen đen** ghi tên các ngôn ngữ của code block kia không, giờ tớ sẽ hướng dẫn tạo ra thứ đó nhee.

```c++
cout<< "Hê hê hê bắt đầu đê";
```

Mà cũng chẳng có gì quá phức tạp 😗, ta chỉ cần hiểu cách mà plugin hoạt động là mọi thứ đơn giản liền.

`gatsby-remark-vscode` sử dụng một thuộc tính gọi là `language` để định nghĩa ngôn ngữ mà ta sử dụng bên trong code block.

Ta chỉ cần viết đoạn code nhỏ sử dụng `useEffect` của **React** rồi đặt `useEffect` trong function của file mà ta định nghĩa cái bài viết chứa code block, thường thường là `blogPost.js` hoặc `blogTemplate.js` gì đó tùy cách đặt tên.

Kiểu như sau :

```js
useEffect(() => {
    let blogContent = document.querySelector('.blog-post-content');
    blogContent.querySelectorAll('pre.grvsc-container').forEach(item => {
      item.outerHTML = `
      <div class= "lang-tabbed_container">
        <div class="lang-tabbed-item">
          ${item.dataset.language.toUpperCase()}
        </div>
        ${item.outerHTML}
      </div>
      `;
    }
  }, []);
```
`blog-post-content` là tên class nằm trong phần nội dung. Đối với **blog của tớ** thì nó như này.

```js
  <Divider />
    <Markdown
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
      rhythm={rhythm}
    />
```

Cuối cùng là thêm một chút CSS cho nó rạng rỡ hơn, nếu muốn tai thỏ như tớ thì chỉ cần copy phần CSS sau đây là được nhaa :

```css
 .lang-tabbed_container {
    position: relative;
  }
  .lang-tabbed-item {
    font-size: 0.9rem;
    height: 39px;
    width: fit-content;
    padding: 2px 8px;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #1E1E1E;
    position: absolute;
    font-family: "JetBrainsMono";
    font-weight: 700;
    top: -33px;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
```

### Kết

Vậy là xong nha, còn lại là tùy thuộc vào sức sáng tạo của các bạn thôi.

**Good luck!**