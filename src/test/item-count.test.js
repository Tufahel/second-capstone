import productCount from '../modules/productCount.js';

document.body.innerHTML = `<header>
<nav>
    <div class="left-block">
        <!-- <img src="" alt=""> -->
        <span>Pokemon</span>
    </div>
    <ul class="right-block">
        <li class="items-count">Products</li>
        <li>Planets</li>
        <li>Races</li>
    </ul>
</nav>
</header>`;

describe('product item count', () => {
  test('Product Count', () => {
    const cards = ['card1', 'card2', 'card3'];
    const itesmLength = cards.length;
    const result = productCount(cards);
    expect(result).toBe(itesmLength);
  });
});