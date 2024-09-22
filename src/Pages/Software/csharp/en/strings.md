## Strings

#### Verbatim string with @:

Preserves whitespace and characters like '\' do not need to be escaped.

```c#
Console.WriteLine(@"    c:\source\repos   
        (this is where your code goes)");
```

Output:
```
>        c:\source\repos    
>            (this is where your code goes)
```

#### Escaped Unicode

Use the **\u** plus a four-character code to represent Unicode characters (UTF-16) in a string.

[Japanese UTF-16 table](http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml)

```c#
Console.WriteLine("\u3053\u3093\u306B\u3061\u306F World!");
```

Output (UTF-16):
```
> こんにちは World!
```

```c#
// To generate Japanese invoices:
Console.Write("\n\n\u65e5\u672c\u8a9e\u306e\u8acb\u6c42\u66f8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\uff1a");
```

Output (UTF-16):
```
> 日本語の請求書を生成するには：
```

#### String interpolation

Can be combined with verbatim strings.

```c#
Console.WriteLine($@"C:\Output\{projectName}\Data");
```