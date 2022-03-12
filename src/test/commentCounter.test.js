import productCount from '../modules/productCount.js';

document.body.innerHTML = `<main>
<ul class="grid-list grid-container"></ul>
</main>
<section class="pop-up"></section>
<hr>
<footer>
<h4>Copyright© 2022</h4>
</footer>`;

describe('Comment count', () => {
    test('Comment Count', () => {
        const comments = ['li', 'li', 'li'];
        const commentsLength = comments.length;
        const result = productCount(comments);
        expect(result).toBe(commentsLength);
    });
});