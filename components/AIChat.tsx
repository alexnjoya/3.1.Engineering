'use client'

import { useState } from 'react'

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const phoneNumber = '447300805194' // UK WhatsApp number (country code 44 + 7300805194)
  
  const handleSend = () => {
    if (!message.trim()) return

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message.trim())
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Close the chat and reset message
    setIsOpen(false)
    setMessage('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickMessage = (quickMsg: string) => {
    const encodedMessage = encodeURIComponent(quickMsg)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow-2xl w-[calc(100vw-2rem)] md:w-96 max-h-[500px] flex flex-col">
          {/* Header - WhatsApp Green */}
          <div className="bg-[#25D366] text-white px-4 py-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base">WhatsApp Chat</h3>
                <p className="text-xs text-white/90">We'll reply as soon as possible</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Messages */}
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-3 font-medium">Quick messages:</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleQuickMessage("Hello! I'm interested in your construction services.")}
                className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                Hello, I need help
              </button>
              <button
                onClick={() => handleQuickMessage("I'd like to get a quote for a project.")}
                className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                Get a quote
              </button>
              <button
                onClick={() => handleQuickMessage("Can you tell me more about your services?")}
                className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                More info
              </button>
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white">
            <div className="flex gap-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                rows={3}
                className="flex-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 focus:border-[#25D366] text-sm resize-none"
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className="mt-3 w-full px-4 py-2.5 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
              aria-label="Send message"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-[#25D366] hover:bg-[#20BA5A]"
          aria-label="Open WhatsApp chat"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </button>
      )}
    </div>
  )
}

