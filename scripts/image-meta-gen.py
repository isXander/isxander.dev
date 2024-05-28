import os
import piexif
from PIL import Image
import json

def get_exif_data(image_path):
    exif_data = {}
    try:
        img = Image.open(image_path)
        exif_dict = piexif.load(img.info['exif'])
        
        ifd = exif_dict['0th']
        exif_ifd = exif_dict['Exif']
        
        model = ifd.get(piexif.ImageIFD.Model, b'').decode('utf-8')
        iso = exif_ifd.get(piexif.ExifIFD.ISOSpeedRatings, None)
        f_number = exif_ifd.get(piexif.ExifIFD.FNumber, (0, 1))
        exposure_time = exif_ifd.get(piexif.ExifIFD.ExposureTime, (0, 1))
        
        if iso:
            exif_data['ISO'] = iso
        if f_number != (0, 1):
            exif_data['FNumber'] = f_number[0] / f_number[1]
        if exposure_time != (0, 1):
            exif_data['ExposureTime'] = f'{exposure_time[0]}/{exposure_time[1]}'
        
        exif_data['Model'] = model
    except Exception as e:
        print(f"Failed to read EXIF data from {image_path}: {e}")
    
    return exif_data

def generate_photo_entry(image_path, image_name):
    img = Image.open(image_path)
    width, height = img.size
    exif_data = get_exif_data(image_path)
    
    alt_text = os.path.splitext(image_name)[0].replace('_', ' ')
    camera_info = None
    
    if exif_data:
        camera_info = {
            'model': exif_data.get('Model', ''),
            'settings': f"ISO {exif_data.get('ISO', '')}, f/{exif_data.get('FNumber', '')}, {exif_data.get('ExposureTime', '')}"
        }
    
    photo_entry = {
        'src': f"/{image_name}",
        'alt': alt_text,
        'width': width,
        'height': height,
        'camera': camera_info
    }
    
    return photo_entry

def main():
    folder_path = './public/photography'
    image_files = [f for f in os.listdir(folder_path) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
    
    photos = []
    
    for image_name in image_files:
        image_path = os.path.join(folder_path, image_name)
        photo_entry = generate_photo_entry(image_path, image_name)
        photos.append(photo_entry)
    
    typescript_array = f"const photos: PhotoEntry[] = {json.dumps(photos, indent=4)}"

    print(typescript_array)
    
    with open('./photos.ts', 'w') as ts_file:
        ts_file.write(typescript_array)
    
    print("TypeScript array generated successfully!")

if __name__ == "__main__":
    main()
