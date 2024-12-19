import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../../api/supabase/Supabase";

const supabase = createClient(supabaseUrl, supabaseKey);

export default function SliderBanner() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const data = await supabase.from("posts").select();
    setPosts(data.data);
  }

  return (
    <View className="my-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-3"
      >
        {posts?.map((post) => (
          <Image
            key={post.id}
            source={{
              uri: `${post.image}`,
            }}
            className="h-52 w-96"
          />
        ))}
      </ScrollView>
    </View>
  );
}
