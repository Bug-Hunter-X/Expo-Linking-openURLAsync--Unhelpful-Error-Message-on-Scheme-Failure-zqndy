//Improved error handling for Linking.openURLAsync
async function openURL(url) {
  try {
    await Linking.openURLAsync(url);
  } catch (error) {
    // Check if the error is related to the scheme not being handled
    if (error.message.includes("failed to open URL")) {
      const parsedUrl = new URL(url);
      const scheme = parsedUrl.protocol.replace(/:$/, '');
      console.error(`Error opening URL ${url}: No app found to handle the ${scheme} scheme`);
      // Handle the error appropriately, e.g., show a user-friendly message
      Alert.alert(`No app found to open ${url}`);
    } else {
      console.error("Error opening URL: ", error);
      // Handle other potential errors
    }
  }
}
// Example usage
openURL('mycustomscheme://example');