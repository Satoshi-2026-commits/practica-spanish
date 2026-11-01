#!/usr/bin/perl
# 北欧風パステルカラーへの一括変換スクリプト
use strict;
use warnings;

my %map = (
  # --- 紺 / 青系 → ダスティーブルー ---
  '#173b70' => '#54708a',
  '#0f274a' => '#3d586b',
  '#2563eb' => '#7fa3bd',
  '#1d4ed8' => '#4f7ca3',
  '#0284c7' => '#4f7ca3',
  '#0369a1' => '#4f7ca3',
  '#eff6ff' => '#e9eff5',
  '#dbeafe' => '#d5e1ea',
  '#bfdbfe' => '#bccddb',
  '#93c5fd' => '#9db8cb',
  '#60a5fa' => '#88abc7',
  '#e0f2fe' => '#dce8ef',

  # --- 緑系 → セージグリーン ---
  '#1e9c70' => '#6f9b85',
  '#17835d' => '#5d8672',
  '#10b981' => '#86a892',
  '#16a34a' => '#6f9b85',
  '#15803d' => '#557a63',
  '#86efac' => '#b3cfba',
  '#bbf7d0' => '#c4dbcb',
  '#dcfce7' => '#e2ece4',
  '#f0fdf4' => '#edf2ed',

  # --- 赤系 → くすんだテラコッタ ---
  '#ef4444' => '#c98d84',
  '#dc2626' => '#b5756b',
  '#b91c1c' => '#9c5f56',
  '#fef2f2' => '#f5ebe8',
  '#fee2e2' => '#efe0dc',
  '#fca5a5' => '#d8aca4',
  '#f87171' => '#d0968e',

  # --- 黄系 → サンドベージュ ---
  '#f59e0b' => '#cfa470',
  '#b45309' => '#97744e',
  '#fde68a' => '#e2cfa8',
  '#fffbeb' => '#f5efe3',

  # --- グレー系 → 暖かみのあるストーングレー ---
  '#1f2937' => '#454a4c',
  '#1e293b' => '#4e5355',
  '#334155' => '#5e6468',
  '#475569' => '#767d81',
  '#64748b' => '#8f9598',
  '#94a3b8' => '#adb2b4',
  '#cbd5e1' => '#ced2d2',
  '#e2e8f0' => '#e4e5e2',
  '#f1f5f9' => '#f2f1ee',
  '#f8fafc' => '#f8f7f4',
  '#f4f7fb' => '#f5f3ee',
  '#0f172a' => '#3d4245',

  # --- rgba(紺/青) → rgba(ダスティーブルー/ストーン) ---
  'rgba(15, 23, 42, 0.85)'   => 'rgba(72, 82, 85, 0.85)',
  'rgba(15, 23, 42, 0.6)'    => 'rgba(72, 82, 85, 0.6)',
  'rgba(71, 85, 105, 0.92)'  => 'rgba(120, 127, 130, 0.92)',
  'rgba(37, 99, 235, 0.92)'  => 'rgba(136, 171, 199, 0.92)',
  'rgba(37, 99, 235, 0.07)'  => 'rgba(136, 171, 199, 0.12)',
  'rgba(22, 163, 74, 0.92)'  => 'rgba(134, 168, 146, 0.92)',
  'rgba(23, 59, 112, 0.12)'  => 'rgba(84, 112, 138, 0.10)',
  'rgba(23, 59, 112, 0.08)'  => 'rgba(84, 112, 138, 0.08)',
  'rgba(23, 59, 112, 0.15)'  => 'rgba(84, 112, 138, 0.15)',
  'rgba(23, 59, 112, 0.25)'  => 'rgba(84, 112, 138, 0.22)',
  'rgba(226, 232, 240, 0.8)' => 'rgba(228, 229, 227, 0.8)',
);

my @files = @ARGV;
foreach my $file (@files) {
  open(my $fh, '<', $file) or die "Cannot open $file: $!";
  local $/;
  my $content = <$fh>;
  close($fh);

  my $count = 0;
  foreach my $key (keys %map) {
    my $pat = quotemeta($key);
    $count += () = $content =~ s/$pat/$map{$key}/g;
  }

  open(my $out, '>', $file) or die "Cannot write $file: $!";
  print $out $content;
  close($out);
  print "$file: $count replacements\n";
}
