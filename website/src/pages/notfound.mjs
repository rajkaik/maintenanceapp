import { btn } from '../components.mjs';

export const meta = {
  id: '404',
  file: '404.html',
  title: 'Page not found | Belach Bioteknik',
  description: 'The page you are looking for has moved or no longer exists.',
  heroless: true,
  rel: '/', // served for missing URLs at any depth, so links must be root-absolute
};

export default function notFound({ rel }) {
  return `
    <section class="notfound">
      <div class="container stack stack--md" style="justify-items:center">
        <p class="giant" aria-hidden="true">404</p>
        <h1 class="h2">Page not found</h1>
        <p class="text">The page you are looking for has moved or no longer exists. Our products and contact details are one click away.</p>
        <div class="cluster" style="justify-content:center">
          ${btn({ href: `${rel}index.html`, label: 'Home' })}
          ${btn({ href: `${rel}products.html`, label: 'Products', variant: 'dark' })}
          ${btn({ href: `${rel}contact.html`, label: 'Contact', variant: 'ghost' })}
        </div>
      </div>
    </section>
  `;
}
