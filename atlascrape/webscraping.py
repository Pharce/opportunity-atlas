from selenium import webdriver # launch and initialize a browswer
from selenium.webdriver.common.by import By # search for things by parameters
from selenium.webdriver.support.ui import WebDriverWait # wait for a page to load
from selenium.webdriver.support import expected_conditions as EC # specify what we're looking for on a specific page
from selenium.common.exceptions import TimeoutException # handling a timeout situation


if __name__ == '__main__':

    # initialize an incognito version of chrome
    chrome_options = webdriver.ChromeOptions()

    CHROMEDRIVER_PATH = '/usr/local/bin/chromedriver'
    WINDOW_SIZE = "1920,1080"

    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--window-size=%s" % WINDOW_SIZE)
    chrome_options.add_argument('--no-sandbox')


    # create a new instance of chrome
    print("Creating new instance")
    browser = webdriver.Chrome(
        executable_path='/mnt/c/Users/faris/documents/akeb/opportunity-atlas/atlascrape/chromedriver', 
        options=chrome_options)
    
    print("getting web-page")
    browser.get("https://github.com/TheDancerCodes")
    # Wait 20 seconds for page to load
    timeout = 5

    print("Getting element")
    try:
        WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//img[@class=’avatar width-full rounded-2']")))
    except TimeoutException:
        print("Timed out waiting for page to load")
        browser.quit()
    

    
