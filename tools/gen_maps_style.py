import os
import re
import numpy as np
from skimage.color import rgb2hsv, hsv2rgb
import matplotlib.colors as mplcolors


def make_blue(color):
    rgb = mplcolors.hex2color(color)
    rgb = np.array(rgb).reshape(1, 1, 3)
    hsv = rgb2hsv(rgb)
    print hsv
    #hsv[0, 0, 2] = 1 - hsv[0, 0, 2]
    hsv[0, 0, 0] = 145 / 255.
    hsv[0, 0, 1] = 40 / 100.
    rgb = hsv2rgb(hsv)
    rgb = rgb[0, 0]
    return mplcolors.rgb2hex(rgb)

if __name__ == '__main__':
    styles = {
            'blue': make_blue
            }
    name = 'blue'
    dirname = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        '..',
        '_includes')
    color_re = '(#[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F]' + \
               '[0-9a-fA-F][0-9a-fA-F][0-9a-fA-F])'
    contents = open(os.path.join(dirname, 'maps_style_silver')).read()
    replacements = {}
    for match in re.finditer(color_re, contents):
        color = match.group(0)
        replacements[color] = styles[name](color)
    for src, dst in replacements.items():
        contents = contents.replace(src, dst)
    with open(os.path.join(dirname, 'maps_style_' + name), 'w') as fw:
        fw.write(contents)
