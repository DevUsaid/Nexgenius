const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const allFiles = walkSync('./src', []);

allFiles.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Update text-gradient to neon glow text
  content = content.replace(/className="text-gradient(.*)"/g, 'className="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold $1"');
  content = content.replace(/className="(.*) text-gradient(.*)"/g, 'className="$1 text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.4)] font-bold $2"');
  
  // Replace old text-text-primary with text-white for absolute sharpness where hardcoded
  content = content.replace(/text-text-primary/g, 'text-white');

  if (content !== original) {
    fs.writeFileSync(f, content);
  }
});

console.log('Global Neon typography applied to all .tsx files');
