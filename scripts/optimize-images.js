const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const homeImagesDir = path.join(__dirname, '../public/home');
const galleryDir = path.join(__dirname, '../public/home/gallery_section');

// Image optimization settings
const optimizationSettings = {
    quality: 85,
    format: 'webp',
    width: 1920, // Max width for banner images
    height: 1080, // Max height for banner images
};

// Function to optimize a single image
async function optimizeImage(inputPath, outputPath, options = {}) {
    try {
        const image = sharp(inputPath);

        // Resize if dimensions are provided
        if (options.width && options.height) {
            image.resize(options.width, options.height, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Convert to WebP with quality setting
        await image
            .webp({ quality: options.quality || 85 })
            .toFile(outputPath);

        console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    }
}

// Function to process all images in a directory
async function processDirectory(dirPath, outputDir) {
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory not found: ${dirPath}`);
        return;
    }

    const files = fs.readdirSync(dirPath);
    const imageFiles = files.filter(file =>
        /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('_optimized')
    );

    console.log(`Found ${imageFiles.length} images to optimize in ${dirPath}`);

    for (const file of imageFiles) {
        const inputPath = path.join(dirPath, file);
        const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(outputDir, outputFileName);

        await optimizeImage(inputPath, outputPath, optimizationSettings);
    }
}

// Main function
async function main() {
    console.log('🚀 Starting image optimization...\n');

    // Create optimized directories if they don't exist
    const optimizedHomeDir = path.join(__dirname, '../public/home/optimized');
    const optimizedGalleryDir = path.join(__dirname, '../public/home/gallery_section/optimized');

    [optimizedHomeDir, optimizedGalleryDir].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    // Process home images
    console.log('📁 Processing home images...');
    await processDirectory(homeImagesDir, optimizedHomeDir);

    // Process gallery images
    console.log('\n📁 Processing gallery images...');
    await processDirectory(galleryDir, optimizedGalleryDir);

    console.log('\n🎉 Image optimization complete!');
    console.log('\n📝 Next steps:');
    console.log('1. Update image paths in your components to use the optimized WebP versions');
    console.log('2. Test the website to ensure all images load correctly');
    console.log('3. Run performance tests to measure improvements');
}

// Run the script
main().catch(console.error); 