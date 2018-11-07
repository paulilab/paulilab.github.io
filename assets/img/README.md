Images
======

Please keep this folder tidy by following the rules:
* all photos are in JPEG format with a `.jpg` extension,
* place the folder in an appropriate subfolder (if the subfolder is missing and
  there will be more images like this one, create it),
* adhere to naming conventions you see (use of upper-/lower-case, underscores,
  &hellip;) to minimize possible errors.

Compress the images before you upload them. The best way to accomplish this is
a command-line tool `convert` available on the cluster. To compress an image
called `src.jpeg` while setting its larger side to 1000 px issue:

    convert -resize "1000>" -strip -interlace JPEG -sampling-factor 4:2:0 -quality 70% -colorspace RGB src.jpeg dst.jpeg

You can find the result in the `dst.jpg` file. Check it before deleting the
original.


Troubleshooting
---------------

If your picture does not show up, it is most probably because the filename is
not **exactly** what you specify.

Check:
* the filename character by character,
* check the extension `image.jpeg` is not the same as `image.jpg`.
* check case, all filename are case-sensitive, so `Image.jpg` is not the same
  as `image.jpg`.
