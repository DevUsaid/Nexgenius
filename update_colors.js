const fs = require('fs');
const files = [
  'src/app/page.tsx',
  'src/components/FAQ.tsx',
  'src/components/ContactSection.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx'
];
files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/accent-blue/g, 'brand-primary');
    content = content.replace(/electric-cyan/g, 'brand-accent');
    content = content.replace(/accent-purple/g, 'brand-dark');
    content = content.replace(/prose-blue/g, 'prose-emerald'); // Tailwind prose
    fs.writeFileSync(f, content);
  }
});
console.log('done');
