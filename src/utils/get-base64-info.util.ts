const getBase64Info = (base64String: string): { mimeType: string, sizeInBytes: number } => {
  const parts = base64String.split(',');

  let mimeType = '';
  if (parts.length > 1) {
    const match = parts[0].match(/data:(.*?);base64/);
    mimeType = match ? match[1] : '';
  }

  const byteLength = btoa(base64String).length; // In bytes

  return {
    mimeType,
    sizeInBytes: byteLength,
  };
}

export default getBase64Info;