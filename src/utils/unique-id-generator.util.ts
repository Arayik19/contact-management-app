const generateUniqueId = (): string => {
    return self.crypto.randomUUID();
}

export default generateUniqueId;
