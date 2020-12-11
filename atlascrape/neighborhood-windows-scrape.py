import time
import io
from msedge.selenium_tools import Edge, EdgeOptions
from selenium.webdriver.common.keys import Keys


# Launch Microsoft Edge (EdgeHTML)
if __name__ == '__main__':

    tract_id = '38077970700'
    address_id = ''

    driver = Edge(executable_path=r"C:\Users\faris\documents\akeb\opportunity-atlas\atlascrape\msedgedriver.exe")
    # driver = Edge(executable_path="./msedgedriver.exe")
    # Launch Microsoft Edge (Chromium)
    options = EdgeOptions()
    options.use_chromium = True
    driver = Edge(options = options)

    print("Getting atlas")
    # get opportunity atlas
    driver.get("https://opportunityatlas.org/")

    time.sleep(10)


    # click on get started atlas
    get_started = driver.find_element_by_xpath("/html/body/div[3]/div[2]/div[1]/p[5]/button")
    get_started.click()

    # find element
    element = driver.find_element_by_id('introductionDialog')
    driver.execute_script("""
		var element = arguments[0];
		element.parentNode.removeChild(element);
		""", element)

    search_box = driver.find_element_by_xpath(
            '/html/body/div[2]/div[1]/div[2]/div[3]/div[2]/input')
    search_box.clear()
    search_box.send_keys(tract_id)
    time.sleep(2)
    search_box.send_keys(Keys.ENTER)
    time.sleep(10)

    driver.save_screenshot('test.png')
    
    #with io.BytesIO(driver.get_screenshot_as_png()) as f:
    #    f.write('./test.png')
    driver.close()