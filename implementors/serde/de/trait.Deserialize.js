(function() {var implementors = {};
implementors["serde_json"] = ["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/map/struct.Map.html\" title=\"struct serde_json::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"serde_json/struct.Number.html\" title=\"struct serde_json::Number\">Number</a>",];
implementors["serde_value"] = ["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"serde_value/enum.Value.html\" title=\"enum serde_value::Value\">Value</a>",];
implementors["telegram_bot_raw"] = ["impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"telegram_bot_raw/types/chat/enum.Chat.html\" title=\"enum telegram_bot_raw::types::chat::Chat\">Chat</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"telegram_bot_raw/types/chat_member/enum.ChatMemberStatus.html\" title=\"enum telegram_bot_raw::types::chat_member::ChatMemberStatus\">ChatMemberStatus</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/message/struct.Message.html\" title=\"struct telegram_bot_raw::types::message::Message\">Message</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/message/struct.ChannelPost.html\" title=\"struct telegram_bot_raw::types::message::ChannelPost\">ChannelPost</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"telegram_bot_raw/types/message/enum.MessageOrChannelPost.html\" title=\"enum telegram_bot_raw::types::message::MessageOrChannelPost\">MessageOrChannelPost</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/message/struct.MessageEntity.html\" title=\"struct telegram_bot_raw::types::message::MessageEntity\">MessageEntity</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/primitive/struct.True.html\" title=\"struct telegram_bot_raw::types::primitive::True\">True</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.UserId.html\" title=\"struct telegram_bot_raw::types::refs::UserId\">UserId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.GroupId.html\" title=\"struct telegram_bot_raw::types::refs::GroupId\">GroupId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.SupergroupId.html\" title=\"struct telegram_bot_raw::types::refs::SupergroupId\">SupergroupId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.ChannelId.html\" title=\"struct telegram_bot_raw::types::refs::ChannelId\">ChannelId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.ChatId.html\" title=\"struct telegram_bot_raw::types::refs::ChatId\">ChatId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.MessageId.html\" title=\"struct telegram_bot_raw::types::refs::MessageId\">MessageId</a>","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/refs/struct.CallbackQueryId.html\" title=\"struct telegram_bot_raw::types::refs::CallbackQueryId\">CallbackQueryId</a>","impl&lt;'de, T:&nbsp;<a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"telegram_bot_raw/types/response_parameters/enum.ResponseWrapper.html\" title=\"enum telegram_bot_raw::types::response_parameters::ResponseWrapper\">ResponseWrapper</a>&lt;T&gt;","impl&lt;'de&gt; <a class=\"trait\" href=\"serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"telegram_bot_raw/types/update/struct.Update.html\" title=\"struct telegram_bot_raw::types::update::Update\">Update</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()