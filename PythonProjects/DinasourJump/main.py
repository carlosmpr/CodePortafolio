from PIL import Image
import numpy as np
import pyautogui

dino = Image.open('dinosaur.png')
dinolocation = pyautogui.locateOnScreen(dino)
print(dinolocation)

(x, y , f, z) = dinolocation

dinocaptureSpace = (x+51,y+14,61 ,z-39)



im1 = pyautogui.screenshot(region=(dinocaptureSpace))
dinoWalkClean = np.array(im1)
print(dinoWalkClean)



while True:
    compare = pyautogui.screenshot(region=(dinocaptureSpace))
    comparearray = np.array(compare)
    value = (dinoWalkClean == comparearray).all()
    if value:
        pass
    else:
        pyautogui.press('space')
