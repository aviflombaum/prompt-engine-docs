#!/bin/bash

# Script to ensure lightningcss Linux binaries are properly installed
echo "Installing lightningcss Linux binaries..."

# Detect the system architecture
ARCH=$(uname -m)
OS=$(uname -s)

if [ "$OS" = "Linux" ]; then
    # Remove existing lightningcss installations
    rm -rf node_modules/lightningcss
    rm -rf node_modules/lightningcss-*
    
    # Install lightningcss with all binaries
    if [ "$ARCH" = "x86_64" ]; then
        echo "Installing for Linux x64..."
        npm install lightningcss@1.25.1 lightningcss-linux-x64-gnu@1.25.1 lightningcss-linux-x64-musl@1.25.1 --force
    elif [ "$ARCH" = "aarch64" ]; then
        echo "Installing for Linux ARM64..."
        npm install lightningcss@1.25.1 lightningcss-linux-arm64-gnu@1.25.1 lightningcss-linux-arm64-musl@1.25.1 --force
    fi
    
    # Create symlink if needed
    if [ -f "node_modules/lightningcss-linux-x64-gnu/lightningcss.linux-x64-gnu.node" ]; then
        mkdir -p node_modules/lightningcss/
        ln -sf ../lightningcss-linux-x64-gnu/lightningcss.linux-x64-gnu.node node_modules/lightningcss/lightningcss.linux-x64-gnu.node
    fi
fi

echo "Lightningcss installation complete!"